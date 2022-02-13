const ApiConstant = {
  BASE_URL: 'https://api.leapture.com',

  LEAPCHAT_BASE_URL: 'https://messaging.leapture.com',

  param: '/profile/auth/web',

  LEAPBANKING_BASE_URL: 'http://leapcash.leapture.com:3000/api',

  TRADER_API: 'http://leapcash.leapture.com:3000/api/Trader',

  StatusParam: '/profile/auth/status',

  GenerateQRNumberParam: '/profile/auth/web',

  NotificationsBinding: '/notification/binding',

  SKURegistrationParam: '/sku/register',

  HotDealsParam: '/localshops/hotdeal',

  LocalShopDeliveryStatusParam: '/localshops/posdeliverystatus',

  LocalShopCustomerFeedBackParam: '/localshops/customerfeedback',

  GetGridParam: '/discovery/get_grid',

  EstimateCompaignParam: '/localshops/estimate_sku_campaign',

  CreateCompaignParam: '/localshops/create_sku_campaign',

  InventoryDeleteParam: '/sku/stock/remove',

  InventoryAddParam: '/sku/stock/add',

  GetAllSkuParam: '/localshops/get_all_skus',

  SkuUpdateParam: '/sku/update',

  GetUpdatePinParam: '/profile/pin',

  ProfileInfoParam: '/localshops/update_info',

  billPayListParam: '/billing/bill_pay_list',

  billPayStatusParam: '/billing/bill_pay_processor_status',

  billPayInvoiceParam: '/billing/invoice',

  localshopsPaymentParam: '/localshops/payment-info',

  ValidatePaymentParam: '/upload/validate_cc',

  localshopFleetChatParam: '/localshops/fleet_status',

  GetSkuPackageParam: '/sku/get-sku-package',

  UpdateSkuPackageParam: '/sku/update-sku-package/',

  CreateSkuPackageParam: '/sku/create-sku-package/',

  LocalShopMeParam: '/localshops/me',

  CustomerCurrentLocParam: '/customers/current_locations',

  UpdateProfileParam: '/customers/update_info/',

  BubbleBuilderParam: '/customers/bubble-builder',

  ExcavatorParam: '/customers/excavator',

  CustomerSettings: '/customers/settings',

  InitialSkuParam: '/sku/initialization/get',

  CustomerStories:
    'http://dev.leapture.com/leapture_socialmedia/api/v1/post/dashboard?type=story',

  NewsParam: '/news/getfeed',

  JoinedRoomParam: '/_matrix/client/r0/joined_rooms',

  SearchParam: '/leapsearch/sku_search',

  TopLSPerformerParam: '/localshops/top_10_performers',
  TopNewLSPerformerParam: '/localshops/top_new_performers',

  DeliveryEstParam: '/deliveryman/estimate_delivery',

  DeliveryGetAllLocations: '/deliveryman/get_all_locations',

  DeliveryUpdateProfile: '/deliveryman/update_info',

  AddressParam: '/discovery/address',
  CityParam: '/discovery/get_grid_status',
  DiscoveryCities: '/discovery/get_all_cities',

  CustomerPresence: '/customers/presence',

  NearbyParam: '/deliveryman/location/get_nearby_drivers',

  TopSkuPerformerParam: '/sku/top_sku_performers',
  TopNewSkuPerformerParam: '/sku/new_sku_performers',

  // ***********
  // Delivery Param
  // ***********

  CheckBalanceParam: '/WalletTransfer',

  SendMoneyParam: '/SendMoneyLeapCashWallet',
  ApprovedMoneyParam: '/LeapCashApproveSendMoney',
  GetAllContactsParam: '/Trader',
  DepositMoneyParam: '/DepositMoney',
  ApprovedDepositMoneyParam: '/LeapCashApproveDeposit',
  SilentRegParam: '/profile/auth/silent_register_leapcash',

  DeliveryManStatus: '/deliveryman/get',
  WithdrawMoneyParam: '/WithdrawMoney',
  ApprovedWithdrawMoneyParam: '/LeapCashApproveWithdraw',

  AllTransactionParam: '/queries/listAllTransactions',

  TaximanSurgeFactoryParam: '/taximan/taximan_surge_factor',

  DeliverymanSurgeFactoryParam: '/deliveryman/deliveryman_surge_factor',

  TaximanNearbyDriversParam: '/taximan/location/get_nearby_drivers',

  TaximanTripEstimateParam: '/taximan/taximan_trip_estimate',

  TaximanRatingParam: '/taximan/rating',

  TaximanTripParam: '/taximan/trip_alteration',

  AddCartParam: '/shopping/add_to_cart',
  RemoveCartParam: '/shopping/remove_from_cart',
  UpdateCartParam: '/shopping/update_cart',
  GetCartParam: '/shopping/get_cart',
  OneClickBuy: '/order/one-click',
  GetTaxDetails: '/discovery/hlm/get_tax_details?',

  GetPickupParam: '/order/search',

  // ***********
  // Delivery Param
  // ***********
  DeliveryParam: '/deliveryman',

  // ***********
  // LocalShop Param
  // ***********

  LocalShopPAram: '/localshops',

  // ***********
  // Delivery Home
  // ***********
  DeliveryLoginParam: '/login',
  DeliveryTodayTotalParam: '/today_total',
  DeliveryLastTripParam: '/last_trip',
  DeliveryCheckStatusParam: '/get_online_status',
  DeliveryCurrentLocation: '/current_locations',

  // ***********
  // Delivery Rating Param
  // ***********
  DeliveryRatingMonthlyParam: '/get_monthly_ratings',
  DeliveryRatingWeeklyParam: '/get_weekly_ratings',
  DeliveryRatingDailyParam: '/get_daily_ratings',
  DeliveryRatingHourlyParam: '/get_today_ratings',

  // ***********
  // Delivery Earning Param
  // ***********
  DeliveryEarningMonthlyParam: '/get_monthly_earnings',
  DeliveryEarningWeeklyParam: '/get_weekly_earnings',
  DeliveryEarningDailyParam: '/get_daily_earnings',
  DeliveryEarningHourlyParam: '/get_today_earnings',

  // ***********
  // Today Total
  // ***********

  // ***********
  // Fleet Status
  // ***********

  FleetStatusParam: '/fleet_status',

  // TaxiMan Constants

  TaximanParam: '/taximan',

  TaximanLoginParam: '/login',

  TaximanDataParam: '/taximan/get',

  TaximanProfileInfoParam: '/taximan/update_info',

  TaximanStatus: '/taximan/get_online_status',

  TaximanChangeStatus: '/taximan/change_status',

  TaximanLastTrip: '/taximan/last_trip',

  TaximanTodaysTotal: '/taximan/today_total',

  TaximanAllLocations: '/taximan/get_all_locations',

  TaximanAssignedOrders: '/taximan/get_assigned_orders',

  TaximanChangeOrderStatus: '/taximan/ride/status',

  TaximanTodayReport: '/taximan/get_today_report?taximan_id=',

  TaximanYearlyEarnings: '/taximan/get_yearly_earnings',
  TaximanMonthlyEarnings: '/taximan/get_monthly_earnings',
  TaximanWeeklyEarnings: '/taximan/get_weekly_earnings',
  TaximanDailyEarnings: '/taximan/get_daily_earnings',

  // Taximan Ratings
  TaximanYearlyRatings: '/taximan/get_yearly_ratings',
  TaximanMonthlyRatings: '/taximan/get_monthly_ratings',
  TaximanDailyRatings: '/taximan/get_daily_ratings',
  TaximanWeeklyRatings: '/taximan/get_weekly_ratings',

  // Taximan FleetChat
  TaximanFleetChat: '/taximan/fleet_status',
  CurrentLocation: '/taximan/current_locations',

  STATUS_CODES: {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    NOT_VALID_TOKEN: 401,
    UN_AUTHORIZED: 403,
  },

  // ***********
  // Methods
  // ***********

  post: 'post',
  get: 'get',
  put: 'put',
  delete: 'delete',

  // ***********
  // Content types
  // ***********
  body: 'body',
  urlencoded: 'urlencoded',
}

export default ApiConstant
