class PasswordsController < ApplicationController
  def new
    @user = User.find(params[:user_id])
  end

  def update
    @user = User.find(params[:user_id])
    user_params = params.require(:user).permit(:password,
                                               :password_confirmation)
    if @user.update user_params
      redirect_to root_path,notice: 'Password reset succesfull'
    else
      render :new
    end
  end

  private

   def current_password_validation

   end 
end
