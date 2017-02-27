class PasswordsController < ApplicationController
  def edit
  end

  def new
    @user = User.find(params[:user_id])
  #   @user = User.find(params[:user_id])
  #   user_params = params.require(:user).permit(:password,
  #                                              :password_confirmation)
  #   if @user.update user_params
  #     redirect_to root_path,notice: 'Password reset succesfull'
  #   else
  #     render :new
  #   end
  #   render json:params
  # end
end

def create
  render json:params

end
  private

   def current_password_validation

   end
end
