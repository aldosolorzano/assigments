class UsersController < ApplicationController
  before_action :authenticate_user!, only:[:edit]
  before_action :authorize, only: [:edit, :update]

  def new
    @user = User.new
  end

  def edit
    @user = User.find params[:id]
  end

  def create
    user_params = params.require(:user).permit(:first_name,
                                               :last_name,
                                               :email,
                                               :password,
                                               :password_confirmation)
    @user = User.new user_params

    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'Sign Up succesfull'
    else
      render :new, notice: 'Sign Up succesfull'
    end
  end

  def update
    @user = User.find params[:id]
    user_params = params.require(:user).permit(:first_name,
                                        :last_name,
                                        :email)
    if @user.update user_params
      redirect_to root_path, notice:'Profile updated!'
    else
      render :edit
    end

  end

  private

  def authorize
    @user = User.find params[:id]
    if cannot?(:manage, @user)
      redirect_to root_path, notice:'You cant tho'
    end
  end
end
