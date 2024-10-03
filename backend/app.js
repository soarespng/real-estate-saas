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
  const { data, error } = await supabase
    .from('properties')
    .select('*');
  
  if (error) {
    reply.code(500).send({ error: 'Error fetching properties' });
  } else {
    reply.send({ properties: data });
  }
});

fastify.post('/properties', async (request, reply) => {
  const newProperty = request.body;
  const { data, error } = await supabase
    .from('properties')
    .insert({ data : newProperty })
    .select();

  if (error) {
    console.log(error);
    reply.code(500).send({ error: 'Error inserting property' });
  } else {
    reply.code(201).send({ message: 'Property added successfully', property: data });
  }
});

const start = async () => {
    try {
      await fastify.listen({ port: 3001, host: '0.0.0.0' });
    } catch (err) {
      process.exit(1);
    }
};
  
start();