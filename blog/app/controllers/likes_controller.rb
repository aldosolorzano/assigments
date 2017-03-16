class LikesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_post, only: [:create]

  def index
    @posts = current_user.liked_posts
  end

  def create
    @like = Like.new
    @like.user = current_user
    @like.post = @post

    if cannot?(:like,@post)
      redirect_to post_path(@post), alert: 'Can\'t like'
      return
    end
    redirect_to(
      post_path(@post),
      @like.save ? {notice: 'Liked'} : {alert:'Not liked'}
    )
  end

  def destroy
    like = Like.find params[:id]

    if cannot?(:like, like.post)
      redirect_to post_path(@post), alert: 'Can\'t like'
      return
    end

    like.destroy
    redirect_to post_path(like.post), notice: 'unliked'
  end

  private

  def find_post
    @post ||= Post.find params[:post_id]
  end

end
