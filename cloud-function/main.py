import functions_framework

@functions_framework.http
def test_value(request):
    data = request.get_json(silent=True) or {}
    value = data.get("value", "no value provided")
    return {"received": value}
