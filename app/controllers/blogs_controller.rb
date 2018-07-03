class BlogsController < ApplicationController
  def index
    @blogs = Blog.order("created_at desc")
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    @blog.user_id = current_user.id
    if @blog.save
      redirect_to '/'
    else
      render '/blogs/new'
    end
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    blog = Blog.find(params[:id])
    if(blog.update(blog_params))
      redirect_to "/users/#{blog.user_id}"
    else
      render edit_blog_path
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
      redirect_to user_path(:id=> current_user.id)
  end

  private
  def get_posts
    Post.limit(30)
  end

  def blog_params
    params.require(:blog).permit(:title, :content, :user_id)
  end
end
