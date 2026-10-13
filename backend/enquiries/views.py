from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.permissions import IsAuthenticated
from .models import Enquiry
from .serializers import EnquirySerializer, AdminEnquirySerializer

class EnquiryCreateView(generics.CreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [] 
    throttle_classes = [AnonRateThrottle]

class HealthCheckView(APIView):
    permission_classes = []
    
    def get(self, request):
        return Response({"status": "success", "message": "RS World API is running perfectly!"})

# --- SECURE ADMIN DASHBOARD VIEWS ---
class EnquiryListView(generics.ListAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = AdminEnquirySerializer
    permission_classes = [IsAuthenticated]

class EnquiryUpdateView(generics.UpdateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = AdminEnquirySerializer
    permission_classes = [IsAuthenticated]
