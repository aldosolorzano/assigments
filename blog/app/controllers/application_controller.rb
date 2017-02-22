class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def find_post
    @post = Post.find(params[:id])
  end

  def current_user
    User.find session[:user_id] if session[:user_id].present?
  end

  def user_signed_in?
    session[:user_id].present?
  end

def authenticate_user!
  redirect_to new_session_path, alert: 'Please sign in' unless user_signed_in?
end

  helper_method :current_user, :user_signed_in?
end
