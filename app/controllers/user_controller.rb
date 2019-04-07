class UserController < ApplicationController
  def index
    unless current_user
      redirect_to root_url
    end
  end

  def show
    @params = params
  end
end