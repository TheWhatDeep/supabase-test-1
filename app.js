// Alright, here it is. We're going to test the database using this INCREDIBLY simplified node script. This is not production ready.
// Heck, I'm not even if this is submission ready, but here it is.

// Important to note here that this isn't even written in typescript, because it's incredibly faster to not think of types while building
// this.

// Importing the supabase client library.
import { createClient } from '@supabase/supabase-js'

// DO NOT DO THIS IN PROD. Exposing the supabase url and API key is a HUGE security no-no. But, for this case, it should be fine.
const supabaseUrl = 'https://islviskvndhhnqwuxlue.supabase.co'
const supabaseKey = 'sb_publishable_hxgdJ0QWGgt6HInBqL8I5A_gl9FzAHY'
const supabase = createClient(supabaseUrl, supabaseKey)

// log in function. Used to test different roles. 
async function login(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
}

// Supabase API SELECT query. 
const testViewer = async () => {
    const { data, error } = await supabase
    .from('tasks')
    .select()

    return data ? data : error;
}

// Array of test users created in database. Each user has different roles.
const testScript = [
    {
        // Admin user
        email: 'tim@test.com',
        password: 'TimCook'
    },
    {
        // Viewer 1
        email: 'john@test.com',
        password: 'JohnnyIve',
    },
    {
        // Viewer 2
        email: 'mike@test.com',
        password: 'MikeMarkkula',
    }
];

// Before anything else, clear the console so output is clean.
console.clear();

// Runs a forEach loop to log in each user, run the testViewer function, and then log out. RLS policies should kick in.
testScript.forEach(async (user) => {
    await login(user.email, user.password);

    console.log(`data for ${user.email}:\n${JSON.stringify(await testViewer())}\n\n`);

    let { error } = await supabase.auth.signOut()
});
