class Api::V1::SleepRecordsController < ApplicationController
  before_action :find_user, only: :index
  def create
    @sleep_record = SleepRecord.new(user_id: params[:user_id])
    @sleep_record.save!

    render json: @sleep_record
  end

  def index
    return render json: @user.sleep_records.order(created_at: :asc) if current_user.id == @user.id

    if !current_user.following?(@user)
      render json: { error: 'Not friend' }, status: 401
    else
      render json: @user.sleep_records.where(created_at: Date.today.at_beginning_of_week - 7 .. Date.today.at_beginning_of_week)
                                      .order(duration: :desc)
    end
  end

  def update
    @sleep_record = SleepRecord.find(params[:id])
    return if @sleep_record.finished

    time_diff = Time.now.to_i - @sleep_record.created_at.to_i
    @sleep_record.update(duration: time_diff, finished: true)

    render json: @sleep_record
  end

private
  def find_user
    @user ||= User.find(params[:user_id])
  end
end