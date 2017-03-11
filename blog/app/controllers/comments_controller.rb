class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize, only:[:destroy]
  def create
    comment_params = params.require(:comment).permit([:body])
    @comment = Comment.new comment_params
    @post = Post.find(params[:post_id])
    @comment.post = @post
    @comment.user = current_user
    @comments = Comment.where(post_id: params[:post_id])

    if @comment.save
      CommentsMailer.notify_post_owner(@comment).deliver_now
      redirect_to post_path(params[:post_id])
    else
      flash.now[:alert] = "Fix the errors below"
      render 'posts/show'
    end
  end

  def destroy
    comment = Comment.find params[:id]
    comment.destroy
    redirect_to post_path(comment.post_id)
  end

  private

  def authorize
    @comment = Comment.find params[:id]

    if cannot?(:manage, @comment)
      redirect_to post_path(@comment.post_id),notice:'You cant tho'
    end
  end

end
