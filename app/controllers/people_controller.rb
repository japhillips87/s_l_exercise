class PeopleController < ApplicationController
  before_action :authenticate_user!

  def index
    @people = People.all
  end
end
