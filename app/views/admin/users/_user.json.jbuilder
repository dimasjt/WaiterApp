json.extract! admin_user, :id, :first_name, :last_name, :email, :role, :phone, :created_at, :updated_at
json.url admin_user_url(admin_user, format: :json)