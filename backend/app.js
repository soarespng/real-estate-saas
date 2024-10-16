require('dotenv').config();

const fastify = require('fastify')({ logger: true });
const { createClient } = require('@supabase/supabase-js');
const cors = require('@fastify/cors');

fastify.register(cors, {
  origin: '*',
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

fastify.get('/properties', async (request, reply) => {
  const { cidade, tipo, valorMaximo, dormitorios, aluguel, venda } = request.query;
  
  fastify.log.info(`Query recebida: cidade=${cidade}, tipo=${tipo}, valorMaximo=${valorMaximo}, dormitorios=${dormitorios}, aluguel=${aluguel}, venda=${venda}`);
  
  let query = supabase.from('properties').select('*');

  if (cidade) {
    query = query.ilike('data->endereco->>cidade', `%${cidade}%`);
  }

  if (tipo) {
    query = query.eq('data->>tipo', tipo);
  }

  if (valorMaximo) {
    query = query.lte('data->>valor', valorMaximo);
  }

  if (dormitorios) {
    query = query.eq('data->>dormitorio', dormitorios);
  }

  if (aluguel) {
    query = query.eq('data->>aluguel', true);
  }

  if (venda) {
    query = query.eq('data->>venda', true);
  }

  const { data, error } = await query;

  if (error) {
    fastify.log.error(`Erro ao buscar propriedades: ${error.message}`);
    reply.code(500).send({ error: 'Erro ao buscar propriedades', detalhes: error.message });
  } else {
    fastify.log.info(`Propriedades encontradas: ${data.length}`);
    reply.send({ properties: data });
  }
});

fastify.post('/properties', async (request, reply) => {
  const newProperty = request.body;
  const { data, error } = await supabase
    .from('properties')
    .insert({ data: newProperty })
    .select();

  if (error) {
    fastify.log.error(`Erro ao inserir propriedade: ${error.message}`);
    reply.code(500).send({ error: 'Erro ao inserir propriedade', detalhes: error.message });
  } else {
    fastify.log.info('Propriedade adicionada com sucesso');
    reply.code(201).send({ message: 'Propriedade adicionada com sucesso', property: data });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
