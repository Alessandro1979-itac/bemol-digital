<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Services;

use Exception;
use Illuminate\Support\Facades\Http;

class CEPService {

    const API_URL = 'https://viacep.com.br/ws/';

    public function getInfoAddress($cep){

        $response = Http::get(CEPService::API_URL.$cep.'/json')->collect();
        if($response->has('erro')){
            throw new Exception('CEP inválido');
        } else {
            return $response;
        }
    }

    public function getST($cep){
        $data = $this->getInfoAddress($cep);
        return $data->get('uf');
    }
}
