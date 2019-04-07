class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def record_invalid(e)
    render json: e.record.errors, status: :unprocessable_entity
  end

  def current_user
    return nil unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end
end
