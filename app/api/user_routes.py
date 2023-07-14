from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models.db import db
from app.models import User
from app.models.items import Items

user_routes = Blueprint('users', __name__)



@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/cart/<int:id>',methods=['POST'])
@login_required
def add_to_cart(id):
    print('---------------------', id,'----------')
    user_id = current_user.id

    curr_user = User.query.get(user_id)
    print('-0---0-0-0-0------',curr_user)

    item = Items.query.get(id)
    print('---------------',item)

    curr_user.item_cart.append(item)
    db.session.commit()

    return curr_user.to_dict()


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()
