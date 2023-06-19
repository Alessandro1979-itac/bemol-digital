<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'ddd', 'phone', 'cpf', 'birth'];

    protected static function newFactory()
    {
        return \Database\factories\UserFactory::new();
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }
}
