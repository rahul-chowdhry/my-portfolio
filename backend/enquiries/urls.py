from django.urls import path
from .views import EnquiryCreateView, HealthCheckView, EnquiryListView, EnquiryUpdateView

urlpatterns = [
    path('submit/', EnquiryCreateView.as_view(), name='enquiry-submit'),
    path('health/', HealthCheckView.as_view(), name='api-health'),
    
    # Secure API Routes
    path('list/', EnquiryListView.as_view(), name='enquiry-list'),
    path('<int:pk>/update/', EnquiryUpdateView.as_view(), name='enquiry-update'),
]
