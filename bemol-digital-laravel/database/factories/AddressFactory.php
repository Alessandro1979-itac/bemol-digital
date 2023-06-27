<?php

namespace Database\Factories;

use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Address::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'postcode' => $this->faker->postcode,
            'street' => $this->faker->streetAddress,
            'neighborhood' => $this->faker->neighborhood,
            'city' => $this->faker->city,
            'st' => $this->faker->state,
            'number' => $this->faker->number
        ];
    }
}