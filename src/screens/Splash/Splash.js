import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import {
  OnStatusRequest,
  OnSplashGenerateQRNumberRequest,
} from './Redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SkeletonElement from '../../skeletons/SkeletonElement'

const Splash = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const QrNumber = useSelector(
    (state) => state.SplashReducer.QR_Number.Generate_QR_Number_Response
  )

  const StatusObject = useSelector(
    (state) => state.SplashReducer.Status.StatusResponse
  )

  const [ApiToken, setApiToken] = useState(null)
  const getApiToken = () => {
    let apiToken = axios
      .post('http://leap-oss-server.leapture.com/users/mobile-access-tokens', {
        hash: '822de78448365f05bba2dd6132a711f6c6a6d74f02dae2543d3beae87f0b77dd',
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error)
      })

    return apiToken
  }

  var i = 0
  const [qrSrc, setQrSrc] = useState()
  // eslint-disable-next-line
  const [Verify, SetVerfiy] = useState(false)
  // eslint-disable-next-line
  const [Limits, SetLimits] = useState(false)

  // Run on component mount
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getApiToken()
      if (token !== undefined) {
        setApiToken(token.data.api_token)
        Generate_QR_Number(token.data.api_token)
      } else {
        fetchToken()
      }
    }
    fetchToken()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (QrNumber !== null && QrNumber.result && StatusObject === null) {
      ShowQr(
        QrNumber.result.qr_random,
        QrNumber.result.websession_token,
        QrNumber.result.base64_image
      )
      console.log(
        `%c ${QrNumber.result.qr_random} `,
        'background: green; color: white'
      )
    }
    if (StatusObject !== null && StatusObject.data) {
      console.log('Navigating...', StatusObject.data.active_personality_type)

      switch (StatusObject.data.active_personality_type) {
        case 'delivery':
          navigate('/deliveryman/dashboard')
          break
        default:
          navigate('/')
      }
    }
    // eslint-disable-next-line
  }, [qrSrc, QrNumber, StatusObject])

  const Generate_QR_Number = (ApiToken) => {
    console.log('Generating QR CODE...', ApiToken)
    let Obj = {
      lat: 34.16179357062492,
      long: 72.40869512828422,
    }

    dispatch(OnSplashGenerateQRNumberRequest(ApiToken, Obj))
    // }
  }

  const ShowQr = (QRRN, SessionToken, Image) => {
    setQrSrc(Image)
    Check_Connectivity(QRRN, SessionToken)
  }

  const Check_Connectivity = (QRRN, SessionToken) => {
    console.info('Checking Connectivity...', QRRN, SessionToken)
    let config

    config = {
      method: 'get',

      url: `https://api.leapture.com/profile/auth/web/${QRRN}`,
      headers: {
        ApiToken: `${ApiToken}`,
        WebSessionToken: SessionToken,
      },
    }

    var IntervalFunction = setInterval(function () {
      i = i + 1
      axios(config)
        .then(function (response) {
          localStorage.setItem('PROFILE_TOKEN', response.data.profile_token)
          console.log('Dispatching Status Request...')
          dispatch(OnStatusRequest(ApiToken, response.data.profile_token))
          clearInterval(IntervalFunction)
        })
        .catch(function (error) {
          console.error('Connectivity Error: ', error)
          console.log(i)
          if (i === 10) {
            clearInterval(IntervalFunction)
            SetVerfiy(false)
            SetLimits(true)
          }
        })
    }, 5000)
  }
  return (
    <div
      style={{
        minHeight: '72vh',
      }}
      className='flex justify-center align-items'
    >
      <SkeletonElement type='text' />
      <SkeletonElement type='text' />
      <SkeletonElement type='text' />
      <SkeletonElement type='text' />
      <Col bsPrefix='container m-4 p-4 bg-white shadow-lg rounded-lg '>
        <Row>
          <Col xl={7} className='border'>
            <h4 className='mb-5 mt-4 skeleton skeleton-text'>
              To use your LeapTure on your computer{' '}
            </h4>
            <p className='sekeleton'>1. Open your Leapture on your phone</p>
            <p>
              2. Tap <strong>Menu</strong> or <strong>Settings</strong> and
              select <strong>LeapTure web</strong>
            </p>
            <p>3. Point your phone to this screen to capture the code</p>
          </Col>
          <Col xl={5} className='flex justify-content-center border'>
            <div className='flex flex-column mt-4'>
              <div>
                <img
                  src={qrSrc}
                  alt='qr'
                  className='bg-white shadow-lg rounded-lg skeleton'
                  width='150'
                  height='150'
                />
              </div>

              <p className='my-4 skeleton'>Keep me logged in?</p>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default Splash
