<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveUserRequest;
use App\Models\User;
use App\Services\UserService;
use Exception;

class UserController extends Controller
{
    function __construct(public UserService $userService){}

    public function index()
    {
        try {
            return response()->json($this->userService->list(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }

    public function edit(User $user)
    {
        try {
            return response()->json($this->userService->edit($user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }

    public function store(SaveUserRequest $request)
    {
        try {
            return response()->json($this->userService->create($request->all()), 201);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }

    public function update(SaveUserRequest $request, User $user)
    {
        try {
            return response()->json($this->userService->update($request->all(), $user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }

    public function destroy(User $user)
    {
        try {
            return response()->json($this->userService->destroy($user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }
}
