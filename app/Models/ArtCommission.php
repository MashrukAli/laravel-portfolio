<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtCommission extends Model
{
    use HasFactory;

    // Specify the table name (optional if it matches the default naming convention)
    protected $table = 'art_commissions';

    // Define fillable fields for mass assignment
    protected $fillable = ['name', 'email', 'phone_number', 'description'];
}
