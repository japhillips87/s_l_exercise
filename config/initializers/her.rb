require 'sales_loft_authentication'

Her::API.setup url: 'https://api.salesloft.com/v2' do |c|
  # Request
  c.use SalesLoftAuthentication
  c.use Faraday::Request::UrlEncoded

  # Response
  c.use Her::Middleware::SecondLevelParseJSON

  # Adapter
  c.use Faraday::Adapter::NetHttp
end
