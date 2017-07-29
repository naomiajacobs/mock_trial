class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def new
    render 'layouts/application.html.erb'
  end
end
