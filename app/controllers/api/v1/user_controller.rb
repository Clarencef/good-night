class Api::V1::UserController < ApplicationController
  def index
    redirect_to root_url unless current_user

    users = User.all_except(current_user).map do |item|
      new_item = {
        created_at: item.created_at,
        email: item.email,
        id: item.id,
        name: item.name,
        updated_at: item.updated_at,
        relationId: current_user.following?(item) ? current_user.active_relationships.find_by(followed_id: item.id).id : nil,
      }
      new_item
    end

    render json: {
      users: users,
      current_user: current_user
    }
  end

  def show
    user = User.find(params[:id])

    render json: {
      user: {
        created_at: user.created_at,
        email: user.email,
        id: user.id,
        name: user.name,
        updated_at: user.updated_at,
        relationId: current_user.following?(user) ? current_user.active_relationships.find_by(followed_id: user.id).id : nil,
      },
      current_user: current_user
    }
  end

  def new

  end

  def create
    user = User.find_by(email: params[:user][:email])

    unless user || (user && user.name != params[:user][:name])
      user = User.new user_params
      user.save!
    end

    session[:user_id] = user.id
    render json: @user
  end

private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end