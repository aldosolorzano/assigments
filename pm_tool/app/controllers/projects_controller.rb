class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find params[:id]
  end

  def new
    @project = Project.new
  end

  def create
    project_params = params.require(:project).permit([:title,:description])
    @project = Project.new(project_params)

    if @project.save
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def destroy
    @project = Project.find params[:id]
    @project.destroy
    redirect_to projects_path
  end

  def update
    project_params = params.require(:project).permit([:title,:description])
    @project = Project.find(params[:id])

    if Project.update(project_params)
      redirect_to project_path(@project)
    else
      render :edit
    end

  end

end
