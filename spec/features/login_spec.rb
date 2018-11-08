require 'rails_helper'

describe 'Login process', type: :feature do
  before do
    User.create(email: 'user@example.com', password: 'password')
  end

  context 'when a user visits the root path' do
    before { visit '/' }

    it 'redirects to the login page' do
      expect(page).to have_content 'Log in'
    end
  end

  it 'logs the user in and redirects to the people page' do
    visit '/users/sign_in'
    within("#new_user") do
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
    end
    click_button 'Log in'
    expect(page).to have_content 'Signed in successfully.'
    expect(page).to have_content 'People'
  end
end
