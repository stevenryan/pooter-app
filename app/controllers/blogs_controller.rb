class BlogsController < ApplicationController
  def index
    @blogs = Blog.limit(10)
  end

  def new
  end

  def create
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def edit
  end

  def destroy
  end
end
