<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::whereNull('boss_id')
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'tree',
            'employee' => $employees,
        ], 201);
    }

    public function child($id)
    {
        $chiildren = Employee::where('id', $id)
            ->with('childrenEmployees')
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'tree',
            'employee' => $chiildren,
        ], 201);
    }
}
