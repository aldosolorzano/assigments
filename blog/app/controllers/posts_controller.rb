class PostsController < ApplicationController
  def index
  end

  def new
    @post = Post.new
  end
  def create
    post_params = params.require(:post).permit(:title,:body)
    @post = Post.new post_params
    @post.category = 

    @post.save
    render json:params
  end
end
