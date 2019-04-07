class Api::V1::RelationshipsController < ApplicationController
  def create
    followed_user = User.find(params[:relationship][:followed_id])
    current_user.follow(followed_user)

    render json: current_user.active_relationships
  end

  def destroy
    followed_user = Relationship.find(params[:id]).followed
    current_user.unfollow(followed_user)

    render json: Relationship.followed(current_user)
  end

private
  def relation_params
    params.require(:relationship).permit(:followed_id)
  end
end