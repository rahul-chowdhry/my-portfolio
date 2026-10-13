from rest_framework import serializers
from .models import Enquiry

# Public form ke liye
class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ['id', 'name', 'email', 'service_category', 'budget', 'timeline', 'message', 'status', 'created_at']
        read_only_fields = ['id', 'status', 'created_at']

# Admin Dashboard ke liye
class AdminEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
