class PostsController < ApplicationController
  def index
    posts = Post.all

    render json: posts
  end

  def show
    post = get_post

    render json: post
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: post, status: 201
    else
      render json: post.error, status: 422
    end
  end

  def update
    post = get_post

    if post.update(post_params)
      render json: post
    else
      render json: post.error, status: 422
    end
  end

  def destroy
    post = get_post

    post.destroy

    render json: post, status: 204
  end

  private
    def post_params
      params.permit(:title, :body, :image)
    end

    def get_post
      Post.find(params[:id])
    end
end
