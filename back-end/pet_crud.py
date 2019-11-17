import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime, timedelta

cred = credentials.Certificate('pet_secrets.json')
firebase_admin.initialize_app(cred)

db = firestore.client()
users_ref = db.collection(u'users')
pets_ref = db.collection(u'pets')


# TODO: add methods to modify pet status

# registers a new user given a phone
def add_user(phone):
    users_ref.document(phone).set({
        u'petName': None,
        u'petHealth': None,
        u'petExp': None,
        u'petId': None
    })


# add pets given a user
# a pet has 5 lives
def add_pet(phone, name, pet_id):
    users_ref.document(phone).set({
        u'petName': name,
        u'petHealth': "Neutral",
        u'petExp': 0,
        u'petId': pet_id,
        u'lives': 5
    })


# add tasks to a user
# assume due_date is a date object
def add_task(phone, name, desc, due_date):
    users_ref.document(phone).collection(u'tasks').document(name).set({
        u'description': desc,
        u'due': due_date,
        u'complete': False
    })


# retrieve all tasks that are not fulfilled
def get_tasks(phone):
    docs = users_ref.document(phone).collection(u'tasks').where(u'complete', u'==', False).stream()
    tasks = []
    for doc in docs:
        task = doc.to_dict()
        time_five_behind = task["due"]
        task["due"] = time_five_behind.strftime('%b/%d/%Y %H:%M %p')
        task["name"] = doc.id
        tasks.append(task)
    print(tasks)
    return tasks


# retrieve user's pet info
def get_user_pet(phone):
    pet_dict = users_ref.document(phone).get().to_dict()

    # if the pet is "dead" it becomes a rock
    if pet_dict["lives"] == 0:
        users_ref.document(phone).update({
            u'petId': "rock"
        })
    return users_ref.document(phone).get().to_dict()


# complete a user's task and decrease/increase pet exp if task is finished on time or not
def finish_task(phone, name, on_time):
    users_ref.document(phone).collection(u'tasks').document(name).update({
        u'complete': True
    })

    old_value = users_ref.document(phone).get().to_dict()["petExp"]
    new_value = old_value + 20 if on_time else old_value - 20
    users_ref.document(phone).update({
        u"petExp": new_value
    })

    # if the new value becomes negative take a life away :(
    if new_value < 0:
        lives_count = users_ref.document(phone).get().to_dict()["lives"]
        users_ref.document(phone).update({
            u"lives": lives_count - 1
        })


# check if the first time ("current") is past the second time ("due"), assuming both are datetime objects
def comp_time(time1, time2):
    return time1 > time2


get_tasks("1234567890")