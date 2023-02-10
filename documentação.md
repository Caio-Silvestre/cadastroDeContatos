# Essa API tem a finalidade de ser uma "agenda de contatos de clientes". O usuário se cadastra e através do seu cadastro ele pode cadastrar os clientes relacionados a ele.


# ============================USER=====================================
# POST -> http://localhost:{suaPorta}/user
status : 201
   {
	"name": "",
	"email": "",
	"tel": "",
	"password": ""
}
		expected => {
			"name": "",
			"email": "",
			"tel": "",
			"password": "",
			"id": "",
			"isActive": true,
			"createDate": ""
		}
# GET -> http://localhost:{suaPorta}/user/owner

    - Retorna so dados do usuário dono da conta.

# GET -> http://localhost:{suaPorta}/user
    - Retorna todos usuários cadastrados.

# PATCH -> http://localhost:{suaPorta}/user/update
   {
	"name": "",
	"email": "",
	"tel": "",
    }
		expected => {
			"name": "",
			"email": "",
			"tel": "",
			"password": "",
			"id": "",
			"isActive": true,
			"createDate": ""
		}
# DEL -> http://localhost:{suaPorta}/user/delete
status : 201
    - Soft delete sem retorno.

# ============================LOGIN=====================================

# POST -> http://localhost:{suaPorta}/login
status : 200
 	{
	"email": "",
	"password": "",
    }
		expected => {Token}

# ============================CLIENTS=====================================

# POST -> http://localhost:{suaPorta}/client
status : 201
	- Criação de cliente
   Authorizaion: Bearer Token
   {
	"name": "",
	"email": "",
	"tel": "",
    }
		expected => {
			"name": "",
			"email": "",
			"tel": "",
			"user": {},
			"id": "",
			"isActive": true,
			"createDate": ""
			}
# GET -> http://localhost:{suaPorta}/client/:id
   Authorizaion: Bearer Token

    - Retorna so dados do cliente específico.

# GET -> http://localhost:{suaPorta}/client/
   Authorizaion: Bearer Token

    - Retorna todos clientes cadastrados pelo usuário.

# PATCH -> http://localhost:{suaPorta}/client/:id
   Authorizaion: Bearer Token

   {
	"name": "",
	"email": "",
	"tel": "",
    }
		expected => {
			"name": "",
			"email": "",
			"tel": "",
			"user": {},
			"id": "",
			"isActive": true,
			"createDate": ""
			}

# DEL -> http://localhost:{suaPorta}/client/:id
status : 204
    - Soft delete sem retorno.