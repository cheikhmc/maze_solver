import asyncio
from typing import Any, Dict

import aiohttp

async def fetch(api_url: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Perform an asynchronous POST request.

    Args:
        api_url (str): The URL of the API to fetch data from.
        data (Dict[str, Any]): The JSON data to send in the POST request.

    Returns:
        Dict[str, Any]: The JSON response from the API.
    """
    async with aiohttp.ClientSession() as session:
        async with session.post(api_url, json=data) as response:
            return await response.json()
