import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Map from '../../components/Map'
import CalendarComponent from '../../components/Calendar'
import appliances from '../../assets/POI/appliances.webp'
import delivery from '../../assets/POI/delivery.webp'
import ifun from '../../assets/POI/enter.webp'
import iride from '../../assets/POI/event.webp'
import idelivery from '../../assets/POI/delivery.webp'
import ieat from '../../assets/POI/eat.webp'
import Form from '../../components/Form'
import Timeline from '../../components/Timeline'

const Dashboard = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='m-2 p-2'>
      <Row className='border h-full w-full'>
        <Col xl={3} md={3} className='border'>
          <Col>
            <div className='p-2 w-64 bg-white rounded-lg shadow-lg'>
              <Map />
            </div>
          </Col>
          <Col>
            <div className='bg-white rounded-lg shadow-lg'></div>
          </Col>
          <Col>LocalShops</Col>
        </Col>
        <Col xl={6} md={6} className='border'>
          {' '}
          <div className='m-2 bg-white rounded-lg shadow-lg p-2'>
            <div className='flex justify-content-center items-center'>
              <div className='mx-2 flex flex-col items-center'>
                <img
                  src={appliances}
                  alt='appliances'
                  className=''
                  width='50'
                  height='50'
                />
                Hot Deals
              </div>
              <div className='mx-2 flex flex-col items-center'>
                <img
                  src={delivery}
                  alt='delivery'
                  className=''
                  width='50'
                  height='50'
                />
                Delivery Status
              </div>
              <div className='mx-2 flex flex-col items-center'>
                <img
                  src={delivery}
                  alt='delivery'
                  className=''
                  width='50'
                  height='50'
                />
                Pickup Status
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='flex items-center flex-col m-2'>
                <img
                  src={ifun}
                  alt='ifun'
                  className=''
                  width='50'
                  height='50'
                />
                iFun
              </div>
              <div className='flex items-center flex-col m-2'>
                <img
                  src={iride}
                  alt='iride'
                  className=''
                  width='50'
                  height='50'
                />
                iRide
              </div>
              <div className='flex items-center flex-col m-2'>
                <img
                  src={idelivery}
                  alt='idelivery'
                  className=''
                  width='50'
                  height='50'
                />
                iDelivery
              </div>
              <div className='flex items-center flex-col m-2'>
                <img
                  src={ieat}
                  alt='iEat'
                  className=''
                  width='50'
                  height='50'
                />
                iEat
              </div>
            </div>
            <p
              className='border p-2 w-32 bg-gray-200 m-2 cursor-pointer'
              onClick={() => setShowMore(!showMore)}
            >
              Show More
            </p>
            {showMore && (
              <div className='flex justify-content-center'>
                {' '}
                <select className='bg-blue-300 p-2 mx-2'>
                  <option>iFun</option>
                  <option>iFun</option>
                  <option>iFun</option>
                </select>
                <select className='bg-blue-300 p-2 mx-2'>
                  <option>iFun</option>
                </select>
                <select className='bg-blue-300 p-2 mx-2'>
                  <option>iFun</option>
                </select>
                <select className='bg-blue-300 p-2 mx-2'>
                  <option>iFun</option>
                </select>
              </div>
            )}
          </div>
          <div>
            {/* timeline */}
            <Timeline />
          </div>
        </Col>
        <Col xl={3} md={3} className='border'>
          <CalendarComponent />
          <div className='my-4'>
              <Form />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
