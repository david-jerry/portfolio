from django.utils.deprecation import MiddlewareMixin

class UserIpAddressMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response
        # self.sync_middleware = SyncMidleware(get_response)

    def __call__(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        request.ip_country_iso = request.META.get('HTTP_CF_IPCOUNTRY')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')

        request.ip = ip
        # if asyncio.iscoroutine(response):
        #     response = await self.get_response(request)
        #     return response
        response = self.get_response(request)
        return response
