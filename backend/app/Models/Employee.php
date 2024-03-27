<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    public $table = 'employees';

    protected $fillable = [
            'first_name',
            'middle_name',
            'last_name',
            'pay',
            'work_to',
            'photo',
            'level',
            'boss_id',
            'rank',
    ];


    public function employees(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Employee::class);
    }

    public function childrenEmployees(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Employee::class, 'boss_id', 'id');
    }

}
