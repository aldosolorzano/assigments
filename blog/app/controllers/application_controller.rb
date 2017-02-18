class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def find_post
    @post = Post.find(params[:id])
  end
  
end
