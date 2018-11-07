require 'rails_helper'

describe PeopleController, type: :controller do
  describe 'GET index' do
    it 'gets all people' do
      expect(People).to receive(:all)
      get :index
    end
  end
end
