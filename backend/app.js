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

const start = async () => {
    try {
      await fastify.listen({ port: 3001, host: '0.0.0.0' });
      fastify.log.info(`Server listening on http://localhost:3001`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
};
  
start();