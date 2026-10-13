from django.contrib import admin
from .models import Enquiry

@admin.action(description='Mark selected as "In Progress"')
def mark_in_progress(modeladmin, request, queryset):
    queryset.update(status='In Progress')

@admin.action(description='Mark selected as "Completed"')
def mark_completed(modeladmin, request, queryset):
    queryset.update(status='Completed')

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'service_category', 'status', 'created_at')
    list_filter = ('status', 'service_category', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)
    actions = [mark_in_progress, mark_completed]
    
    fieldsets = (
        ('Client Information', {
            'fields': ('name', 'email')
        }),
        ('Enquiry Details', {
            'fields': ('service_category', 'budget', 'timeline', 'message')
        }),
        ('Status & Tracking', {
            'fields': ('status', 'created_at')
        }),
    )
