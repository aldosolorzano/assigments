class PostsController < ApplicationController
  before_action :find_post, only: [:show,:edit,:update]
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end
  def create
    post_params = params.require(:post).permit([:title,:body,:category_id])
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_path(@post)
    else
      render :new
    end

  end

  def show
    @comments = Comment.where(post_id: params[:id])
    @comment = Comment.new
  end

  def edit
  end

  def update
    post_params = params.require(:post).permit([:title,:body,:category_id])
    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      rende :edit
    end
  end
end
