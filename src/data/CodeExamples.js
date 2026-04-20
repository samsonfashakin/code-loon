export const codeExamples = {
  "Props.cs": `using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PropRandomizer : MonoBehaviour
{
    public List<GameObject> propSpawnPoints; //references prop locations in the scene
    public List<GameObject> propPrefabs; //references prop prefabs to spawn

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        spawnProps();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void spawnProps()
    {
        foreach(GameObject spawnPoint in propSpawnPoints)
        {
            int rand = UnityEngine.Random.Range(0, propPrefabs.Count);
            //Instantiate a random prop at the current spawn point, Quaternion.identity means the prop will have no rotation when spawned
            Instantiate(propPrefabs[rand], spawnPoint.transform.position, Quaternion.identity);
            Console.WriteLine("Spawned prop at: " + spawnPoint.transform.position); //Debug log to confirm spawning
        }
    }
}
`,
"Player.cs": `using UnityEngine;

public class PlayerAnimator : MonoBehaviour
{
    //References
    Animator am;
    PlayerMovement pm;
    SpriteRenderer sr;


    void Start()
    {
        am = GetComponent<Animator>();
        pm = GetComponent<PlayerMovement>();
        sr = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        if(pm.moveDir.x != 0 || pm.moveDir.y != 0)
        {
            am.SetBool("Move", true);
            SpriteDirectionChecker();
        }
        else
        {
            am.SetBool("Move", false);
            SpriteDirectionChecker();
        }
    }

    void SpriteDirectionChecker()
    {
        if(pm.moveDir.x < 0)
        {
            sr.flipX = true;
        }
        else if(pm.moveDir.x > 0)
        {
            sr.flipX = false;
        }
    }
}
`,
"Movement.cs": `using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
  public float moveSpeed;
  Rigidbody2D rb;
  [HideInInspector]
  public Vector2 moveDir;

    
  void Start()
  {
      rb = GetComponent<Rigidbody2D>();
  }

  void Update()
  {
      InputManagement();
  }

  //Handles physics updates better than Update because of consistent time intervals between calls rather than frame rate
  void FixedUpdate()
  {
      Move();
  }

  //Processes input
  void InputManagement()
  {
      float moveX = Input.GetAxisRaw("Horizontal");
      float moveY = Input.GetAxisRaw("Vertical");

      moveDir = new Vector2(moveX, moveY).normalized;
  }

  //Handles movement
  void Move()
  {
    rb.linearVelocity = new Vector2(moveDir.x * moveSpeed, moveDir.y * moveSpeed);
  }

}`,
};

export const floatingCards = {
    "Props.cs": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        title: "Smart Completion",
        content: "CodeLoon AI doesn't understands your code at all but will try it's best to autocomplete the entire project by importing thousands of lines of code and libraries and even unsolicited assets from the web."
    },
    "Player.cs": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        title: "Smart Search",
        content: "CodeLoon AI will search through your entire codebase to find relevant information and solutions, unless it gets bored and decides to search the web instead."
    },
    "Movement.cs": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        title: "AI Debugging",
        content: "Once activated, this feature will comb the web to find solutions to any errors in your code and will automatically apply them, one at a time, even if it means breaking the entire project."
    },
}