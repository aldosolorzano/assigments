class CommentsController < ApplicationController
  def create
    comment_params = params.require(:comment).permit([:body])
    @comment = Comment.new comment_params
    @post = Post.find(params[:post_id])
    @comment.post = @post

    if @comment.save
      redirect_to post_path(params[:post_id])
    else
      flash.now[:alert] = "Fix the errors below"
      render 'posts/show'
    end
  end

  def destroy
  end

end
