class BlogsController < ApplicationController
  def index
    @blogs = Blog.limit(5)
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def destroy
  end
end
