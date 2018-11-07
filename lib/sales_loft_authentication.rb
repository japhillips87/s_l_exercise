class SalesLoftAuthentication < Faraday::Middleware
  def call(env)
    env[:request_headers]['Authorization'] = "Bearer #{ENV['SALES_LOFT_TOKEN']}"
    @app.call(env)
  end
end
