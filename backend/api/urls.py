from django.urls import path
from .views import CurrentUserView

urlpatterns = [
    path("user/me/", CurrentUserView.as_view(), name="current-user"),
    # path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    # path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note")
]
