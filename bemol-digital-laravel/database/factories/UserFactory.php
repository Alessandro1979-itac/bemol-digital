<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'password' => Hash::make($this->faker->password()),
            'ddd' => $this->faker->ddd(),
            'phone' => $this->faker->cellphoneNumber(),
            'cpf' => $this->faker->cpf(false),
            'birth' => $this->faker->date('Y-m-d')
        ];
    }
}
